const db = require('../db')
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants')
const { json } = require('express')
const { compare } = require('bcryptjs')

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query('select user_id, name, email, phone, address from users')

    return res.status(200).json({
      success: true,
      users: rows,
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { name, email, password, phone, address } = req.body
  try {
    const hashedPassword = await hash(password, 10)
    await db.query('insert into users(name,email,password,phone,address) values ($1,$2,$3,$4,$5)', [
      name,
      email,
      hashedPassword, // hashedPassword
      phone,
      address,
    ])

    return res.status(201).json({
      success: true,
      message: 'The registration was successful.',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.user_id,
    email: user.email,
  }

  try {
    const token = sign(payload, SECRET);
    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in successfully.',
      token: `${user.user_id}`,
    }) 
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully.',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}


/* Create Post add to the db */

exports.createPost = async (req, res) => {
  const { name, breed, age, location, p_image, extra_info, vaccinated, ts, user_id } = req.body
  console.log(location)
  try {
    await db.query('insert into post(name, breed, location, p_image, extra_info, vaccinated, ts, age, user_id ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);', 
    [name, breed, location, p_image, extra_info, vaccinated, ts, age, user_id])
    return res.status(201).json({
      success: true,
      message: 'The post creation was successful.',
    })
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getPosts = async (req, res) => {
  try {
    const { rows } = await db.query('select user_id, post_id, p_image, name, location, user_id, extra_info, ts, vaccinated, breed, age from post ORDER BY ts DESC;')
    //console.log("No error in server.")

    return res.status(200).json({
      success: true,
      message: "well done",
      posts: rows
    })
  } catch (error) {
    console.log("Yes error in server.")
    console.log(error.message)
    return json({success:false, message:"error occured in server"})
  }
}

exports.search = async (req, res) => {
  const { search_name, search_breed, search_location } = req.body
  try {
    const { rows } = await db.query(`select * from post p where p.breed like $1 and p.location like $2 and p.name like $3;`, [search_breed, search_location, search_name])
    return res.status(200).json({
      success: true,
      posts: rows
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.post = async (req, res) => {
  const post_id  = req.body.id
  try {
    const { rows } = await db.query(`select post_id, p_image, name, location, user_id, extra_info, ts, vaccinated, breed, age  from post where post_id = $1 ;`, [post_id])
    return res.status(200).json({
      success: true,
      posts: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}



exports.get_comments = async (req, res) => {
  const post_id  = req.body.id
  try {
    const { rows } = await db.query(`select *  from comment where post_id = $1 ;`, [post_id])
    return res.status(200).json({
      success: true,
      comments: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}


exports.add_comment = async (req, res) => {
  const {user_id, post_id, ts, comment}  = req.body
  try {
    await db.query('insert into comment(user_id,post_id,ts,comment) values ($1,$2,$3,$4)', [
      user_id,
      post_id,
      ts,
      comment
    ])
    const { rows } = await db.query(`select *  from comment where post_id = $1 ;`, [post_id])
    return res.status(200).json({
      success: true,
      comments: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.getUserPosts = async (req, res) => {
  const user_id = req.body.user_id
  try {
    const { rows } = await db.query(`select user_id, post_id, p_image, name, location, extra_info, ts, vaccinated, breed, age from post where user_id = $1;`, [user_id])
    return res.status(200).json({
      success: true,
      posts: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}


exports.getUserFavorites = async (req, res) => {
  const user_id = req.body.user_id
  try {
    const { rows } = await db.query(`select * from post where post_id = ANY(select post_id from favorite where user_id = $1);`, [user_id])
    return res.status(200).json({
      success: true,
      posts: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.addFavorite = async (req, res) => {
  const post_id = req.body.post_id
  const user_id = req.body.user_id
  try {
    let { rows } = await db.query(`select from favorite where user_id=$1 and post_id=$2 `, [user_id , post_id])
    if (rows.length === 0){
      await db.query(`insert into favorite(user_id,post_id) values ($1,$2)`, [user_id , post_id])
    }
    rows = await db.query(`select * from favorite where user_id = $1;`, [user_id])
    return res.status(200).json({
      success: true,
      posts: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.deleteFavorite = async (req, res) => {
  const post_id = req.body.post_id
  const user_id = req.body.user_id
  try {
    let { rows } = await db.query(`select from favorite where user_id=$1 and post_id=$2 `, [user_id , post_id])
    if (rows.length>0){
      await db.query(`delete from favorite where user_id=$1 and post_id=$2 `, [user_id , post_id])
    }
    rows = await db.query(`select * from favorite where user_id = $1;`, [user_id])
    return res.status(200).json({
      success: true,
      posts: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.delete_comment = async (req, res) => {
  const comment_id  = req.body.id
  const post_id = req.body.post_id
  try {
    await db.query('delete from comment where comment_id = $1', [comment_id])
    const { rows } = await db.query(`select *  from comment where post_id = $1 ;`, [post_id])
    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      comments: rows
  } )} catch (error) {
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })

}
}
      
exports.nearByMe = async (req, res) => {
  const { user_id } = req.body
  try {
    const { rows } = await db.query(`SELECT p.user_id, p.post_id, p.p_image, p.location, p.extra_info, p.name, p.breed, p.ts, p.vaccinated, p.age, u.address FROM users u , post p WHERE u.user_id = $1 and u.address = p.location;`, [user_id])
    return res.status(200).json({
      success: true,
      posts: rows
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.edit_comment = async (req, res) => {
  const comment_id  = req.body.id
  const comment = req.body.comment
  const post_id = req.body.post_id
  try {
    await db.query('update comment set comment=$1 where comment_id = $2;', [comment , comment_id])
    const { rows } = await db.query(`select *  from comment where post_id = $1 ;`, [post_id])
    return res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      comments: rows
  })} catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.getUserInfo = async (req, res) => {
  const user_id = req.body.user_id
  try {
    const { rows } = await db.query(`select name, email, phone, address from users where user_id = $1;`, [user_id])
    return res.status(200).json({
      success: true,
      info: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}



exports.get_username = async (req, res) => {
  const user_id  = req.body.id
  try {
    const {rows} = await db.query(`select name from users where user_id = $1 ;`, [user_id])
    return res.status(200).json({
      success:true,
      name: rows[0].name
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.updateUser = async (req, res) => {
  const { name, email, address, phone, user_id } = req.body
  try {
    const { rows } = await db.query(`update users set name = $1, email = $2, phone = $4, address = $3 where user_id = $5;`, [name, email, address, phone, user_id])
    return res.status(200).json({
      success: true,
      info: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.changePassword = async (req, res) => {
  console.log("validation passed")
  const { user_id, new_password } = req.body
    try {
      const hashedPassword = await hash(new_password, 10)
      await db.query(`update users set password = $2 where user_id = $1;`, [user_id, hashedPassword])
      return res.status(200).json({
        success: true,
        message: 'Password has been changed successfully.',
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
}

exports.deletePost = async (req, res) => {
  const post_id = req.body.post_id
  try {
    await db.query('delete from comment where post_id = $1;', [post_id])
    await db.query('delete from favorite where post_id = $1;', [post_id])
    await db.query(`delete from post where post_id = $1;`, [post_id])
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.get_dms = async (req, res) => {
  const user_id = req.body.user_id;
  try {
    const query = "SELECT DISTINCT(m.conv_id), u.name, u.user_id FROM message m, users u WHERE (conv_id LIKE '%_" +user_id+ "' or conv_id LIKE '" +user_id+ "_%') and (u.user_id = m.sender_id or u.user_id = m.receiver_id) and (u.user_id != " +user_id+ ");";
    const { rows } = await db.query(query)
    return res.status(200).json({
      success: true,
      dms: rows,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}

exports.get_conv = async (req, res) => {
  const conv_id = req.body.conv_id
  const other_user_id = req.body.other_user_id
  try {
    const query = `SELECT * FROM users WHERE user_id = '` +other_user_id + `';`;
    const  rows2  = await db.query(query);
    const c = 1;
    const { rows } = await db.query(`SELECT *  
      FROM message m, users u
      WHERE conv_id = $1 
      and u.user_id = m.sender_id
      ORDER BY 1;`, [conv_id]);
    return res.status(200).json({
      success: true,
      conv: rows,
      info: rows2.rows
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}


exports.add_dm = async (req, res) => {
  const message = req.body.message
  const receiver_id = parseInt(req.body.receiver_id)
  const sender_id = parseInt(req.body.sender_id)
  const ts = req.body.ts
  try {
    await db.query(`INSERT INTO message (message, receiver_id, sender_id, ts, conv_id) 
          VALUES ($1, $2, $3, $4, concat( least($5,$6), '_', greatest($5,$6) ));`, [message, receiver_id, sender_id, ts, receiver_id, sender_id])

    const query = `SELECT * FROM users WHERE user_id = '` +receiver_id + `';`;
    const  rows2  = await db.query(query);
    const c = 1;
    const { rows } = await db.query(`SELECT *  
      FROM message m, users u
      WHERE conv_id = concat( least($1,$2), '_', greatest($1,$2) )
      and u.user_id = m.sender_id
      ORDER BY 1;`, [receiver_id, sender_id]);
      return res.status(200).json({
      success: true,
      conv: rows
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.find_conv = async (req, res) => {
  const post_id = req.body.post_id
  const user_id = req.body.user_id
  try {
    const { rows } = await db.query(`SELECT DISTINCT(m.conv_id), p.user_id FROM message m, post p WHERE p.post_id = $1 and ( (m.receiver_id = p.user_id and m.sender_id = $2)  or (m.sender_id= p.user_id and m.receiver_id = $2));`, [post_id, user_id])
    if(rows.length === 0)
    {
      const other_user_id = await db.query(`SELECT * FROM post p, users u WHERE p.user_id = u.user_id and p.post_id = $1;`, [post_id])
      return res.status(200).json({
        success: true,
        other_user_id: other_user_id
      })
    }
    else
    {
      return res.status(200).json({
        success: true,
        conv: rows,
      })
    }
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}