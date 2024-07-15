export default function PageNotFound() {
    return (
        <div class="column justify-center align-items-center ma-10">
            <h1>It's deserted here</h1>
                <img src={require('./images/deserted.webp')}/>
            <center>
                <p>We're not sure if the page you're looking for exists, or if it ever existed for that matter.</p>
                <p>Let us know if you need help.</p>
            </center>
        </div>
    )
}