import "../style/components/GoogleMap.css";


export default function Map() {
    return (
        <div className="map-container scroll-reveal">
            <h1>Group's location</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.875839255011!2d-52.171274488002595!3d-32.072606773857366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119a4215dfd009%3A0x7ae3a69edc43dca9!2sC3%20-%20Computer%20Science%20Center!5e0!3m2!1sen!2sbr!4v1759351347319!5m2!1sen!2sbr" 
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}