import './loader.css'

const Loader = () => {
    return (
        <div className="body w-full h-full">
            <div className="scene">
                <div className="shadow"></div>
                <div className="jumper">
                    <div className="spinner">
                        <div className="scaler">
                            <div className="loader">
                                <div className="cuboid">
                                    <div className="cuboid__side"></div>
                                    <div className="cuboid__side"></div>
                                    <div className="cuboid__side"></div>
                                    <div className="cuboid__side"></div>
                                    <div className="cuboid__side"></div>
                                    <div className="cuboid__side"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
