import loader from './loader.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="Loading" />
            <h1>Fetching data</h1>
        </div>
    )
}

export default Loader
