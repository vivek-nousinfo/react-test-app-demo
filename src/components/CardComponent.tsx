import React from 'react';

interface UsersProps {
  user: any
}

const Card: React.FC<UsersProps> = (props: any) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.company.name}</h6>
        <p className="card-text">{props.user.company.catchPhrase}</p>
      </div>
    </div>
  )
}
export default Card;