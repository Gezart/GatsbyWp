import React from 'react'

const Team = ({team}) => {
    const teamMembers = team.member
    return (
        <div className='team'>
            <div className="section-header">
                <h2>{team.teamSubtitle}</h2>
                <h1>{team.teamTitle}</h1>
            </div>
            <div className="team-members">
                {
                    teamMembers.map((member, index) =>
                        <div className="member" key={index}>
                            <div className="member-image">
                                <img src={member.image ? member.image.mediaItemUrl: ''} alt="" />
                            </div>
                            <div className="member-content">
                                <h3>{member.name}</h3>
                                <p>{member.jobPosition}</p>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Team
