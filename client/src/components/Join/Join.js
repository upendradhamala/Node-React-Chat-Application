import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

export default function SignIn() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='outer'>
      <div className='joinOuterContainer'>
        <div className='joinInnerContainer'>
          <h1 className='heading'>Join the Chat</h1>
          <form>
            <div>
              <input
                placeholder='Name'
                className='joinInput'
                type='text'
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder='Room'
                className='joinInput mt-20'
                type='text'
                required
                onChange={(event) => setRoom(event.target.value)}
              />
            </div>

            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className={'button mt-20'} type='submit'>
                Sign In
              </button>
            </Link>
          </form>
          <br />
          <br />
          <br />
          <br />
          <p
            style={{
              textAlign: 'center',
              margin: 'auto',
              fontWeight: 500,
            }}
          >
            <small>* Put your name and known room name to get started</small>
          </p>
        </div>
      </div>
    </div>
  )
}
