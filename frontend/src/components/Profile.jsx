import React from 'react'
function Profile() {
  return (
    <div>
      <Button variant='contained'>
            <Link to={"/my"}>my events</Link>
      </Button> <br/><br/>
      <Button variant='contained'>
            <Link to={"/ve"}>volunteered events</Link>
      </Button>
    </div>
    )
}

export default Profile
