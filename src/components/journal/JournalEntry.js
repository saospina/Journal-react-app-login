import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.latercera.com/resizer/Am6Tr2ws8JnL4CHLfU_Humpr56Q=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/XMJRWZH5N5CBXPL67NAKBGXFNI.jpg)'
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste at non est enim voluptatum officiis quam eius odit. Temporibus voluptatem repudiandae tempora nobis dignissimos possimus reiciendis et iusto similique odit?
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>24</h4>

            </div>

        </div>
    )
}
