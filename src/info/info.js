import React, { Component } from 'react';
import './info.css';

class Info extends Component {
    state = {  }
    render() { 
        return (
            <div>  
                <h1 className="info-main" style={{"margin-top":"250px"}}>CORONA VIRUS</h1>
                <br></br>
                <br></br>
                <p className="info-simple">Coronaviruses are a group of related viruses that cause diseases in mammals and birds.
                In humans, coronaviruses cause respiratory tract infections that can range from mild to lethal. 
                Mild illnesses include some cases of the common cold (which has other possible causes, predominantly 
                rhinoviruses), while more lethal varieties can cause SARS, MERS, and COVID-19</p>
                <p className="info-simple">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate symptoms.</p>
                <br></br>
                <p className="info-sub">Common symptoms:</p>
                <ol className="info-basic">
                    <li>fever</li>
                    <li>tiredness</li>
                    <li>dry cough</li>
                </ol>
                <img src="spread.webp" alt="map" align="right" width="500" height="300" style={{"margin-right" : "6%", "margin-top" : "3%"}}></img>
                <p className="info-sub">Some people may experience:</p>
                <ol className="info-basic">
                    <li>aches and pains</li>
                    <li>nasal congestion</li>
                    <li>runny nose</li>
                    <li>sore throat</li>
                    <li>diarrhoea</li>
                </ol>
            <p className="info-simple">On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>
            <p className="info-simple">People with mild symptoms who are otherwise healthy should self-isolate. Seek medical attention if you have a fever, a cough, and difficulty breathing.</p>
            <br></br>
            <br></br>
            <p className="info-simple">The whole word has been taken aback due to this sudden pandemic outburst.</p>
            <p className="info-sub">Prevention:</p>
            <p className="info-basic">To prevent the spread of COVID-19:</p>
            <ol className="info-basic">
                <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
                <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                <li>Don’t touch your eyes, nose or mouth.</li>
                <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                <li>Stay home if you feel unwell.</li>
                <li>If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.</li>
                <li>Follow the directions of your local health authority.</li>
                <li>Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.</li>
            </ol>
            <br></br>
            <p className="info-simple">Stay safe and stay healthy!</p>
            </div> );
    }
}
 
export default Info;