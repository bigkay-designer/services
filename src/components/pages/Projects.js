import React from 'react'
import {Button} from '@material-ui/core'
import {Visibility} from '@material-ui/icons'
import '../css/project.css'
function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projects__container">
                <div className="content">
                    <img src="https://res.cloudinary.com/diqgjrpua/image/upload/v1606800223/portfolio%20images/screenshot-callmyneighbour-site-1606798735667_pqpidb.png" alt=""/>
                    <div className="btn">
                        <a href="https://callmyneighbour.site/" target="_blank" rel="noreferrer">
                            <Visibility />
                            <Button>view project</Button>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <img src="https://res.cloudinary.com/diqgjrpua/image/upload/v1606799134/portfolio%20images/screenshot-covid-19tracker-site-1606799113535_x5nwwo.png" alt=""/>
                    <div className="btn">
                        <a href="https://covid-19tracker.site/" target="_blank" rel="noreferrer">
                            <Visibility />
                            <Button>view project</Button>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <img src="https://res.cloudinary.com/diqgjrpua/image/upload/v1629910751/portfolio%20images/Screenshot_2021-08-25_at_12.55.45_d1umug.png" alt=""/>
                    <div className="btn">
                        <a href="https://bkclothing-a57f8.web.app/" target="_blank" rel="noreferrer">
                            <Visibility />
                            <Button>view project</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
