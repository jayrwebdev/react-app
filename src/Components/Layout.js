import React, { Component } from 'react';
import Card from './Card'



class Layout extends Component {
    state = {
        score: 0,
        topscore: 0,
        clicked: [],
        pictureArray : [
            {
                id: 1,
                name: "Mavericks",
                src: "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/d9/f0/add9f0fa-a3c7-f859-3130-bb0a68d239f7/source/256x256bb.jpg"
            },
            {
                id: 2,
                name: "Pelicans",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwtUsYAceuDy0ORRuNzvFsUOYjhytQ2Mg1jYSTZOdhrvDKdBg&s"
            },
            {
                id: 3,
                name: "Timberwolves",
                src: "https://www.nba.com/timberwolves/sites/timberwolves/files/mn_timberwolves_official_site_favicon_171001_0pk_icon.ico"
            },
            {
                id: 4,
                name: "Celtics",
                src: "https://a.thumbs.redditmedia.com/ML5KJzy9hdKeQ-TTN0B71m5O9F2jAggMrk8Ow8KbNI0.png"
            },
            {
                id: 5,
                name: "Raptors",
                src: "https://d1si3tbndbzwz9.cloudfront.net/basketball/team/5/logo.png"
            },
            {
                id: 6,
                name: "Clippers",
                src: "https://pbs.twimg.com/profile_images/719289452460244993/Q-SKYBVG.jpg"
            },
            {
                id: 7,
                name: "Cavaliers",
                src: "data:image/png;base64,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"
            },
            {
                id: 8,
                name: "76ers",
                src: "https://b3h2.scene7.com/is/image/BedBathandBeyond/207079565826966p?$imagePLP$&wid=256"
            }
        ]
    }
   
    cardClick = (id) => {
        this.shuffleArray(this.state.pictureArray)
        this.gameCheck(id)
    }
    shuffleArray = (pictureArray) => {
        pictureArray.sort((a, b) => Math.floor(Math.random() * 1000) > 500 ? 1 : -1);
        this.setState({ pictureArray: pictureArray })
    }

    gameCheck = (id) => {

        if (this.state.clicked.includes(id)) {
            this.setState({
                clicked: [],
                topscore: Math.max(this.state.score,this.state.topscore),
                score: 0
            })
        } else {
            const clickedcopy = this.state.clicked;
            clickedcopy.push(id);
            this.setState({
                score: this.state.score + 1,
                clicked: clickedcopy
            })
        }


    }

    render() {
        return (
            <div className="fluid-container">
                <div row="col-12">
                    <div className="score">
                        <h5 className="title">Score: {this.state.score} || Top Score: {this.state.topscore}</h5>
                    </div>
                </div>
                <div row="col-6">
                    {this.state.pictureArray.map((data, index) =>
                    <Card onClick={() => { this.cardClick(data.id) }} key={index} id={data.id} src={data.src} name={data.name} />

                )}
                </div>
                
            </div>
        )
    }
}
export default Layout