// react
import React from 'react';
// hash
import md5 from 'md5';


function Gravatar(props) {
  const email = props.email || 'no_email'
  const email_md5 = md5(email)
  return (
    <img className={props.className} src={`https://www.gravatar.com/avatar/${email_md5}?d=identicon`} alt="avatar" />
  )
}

export default Gravatar;