import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState('username')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const send = (e) => {
    e.preventDefault();
    alert("Sent :)")
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
      </Head>
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style={{minHeight:'500px'}}>
        <div class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
          <input  class="fs-5 fw-semibold" value={username} onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div class="list-group list-group-flush border-bottom scrollarea">
         { messages.map(message => {
            return(
              <div class="list-group-item list-group-item-action py-3 lh-sm">
                <div class="d-flex w-100 align-items-center justify-content-between">
                  {message.username}
                </div>
                <div class="col-10 mb-1 small">{message.message}</div>
              </div>
             )
          })}
          
        </div>
      </div>
      
      <form onSubmit={send} className='d-flex'>
        <input className="form-control" placeholder="Write a message!" value={message} onChange={e=>{e.target.value}}/>
        <input type='submit' value={'Send'}/>
        <p>Almas is here</p>
      </form>
    </div>
  );
}
