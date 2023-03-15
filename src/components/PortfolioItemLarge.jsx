import React, {useState, useEffect } from "react";

function PortfolioItemLarge({title, imgUrl, stack, liveLink, description, githubLink}, ref){
    const [isdeadLink, setIsDeadLink] = useState(false)
    
    useEffect(() =>{
        if(liveLink == "NA"){
            setIsDeadLink(true)
        }
    }, []);

    return(
        <div ref={ref}>
            <div className="CardContainer border-2 border-stone-900 dark:border-white rounded-lg" style={{pointerEvents: 'auto'}} >
                <h1 className='text-center portfolio-title'>{title}</h1>
                <img src={imgUrl} className='portfolio-img' />
                <div className="quick-facts">
                    <div className="tools">
                        <h2>Tools Used</h2>
                        <hr />
                        <p>
                            {stack.map(item => (
                                <span className='inline-block px-2 py-1 font-semibold dark:border-white'>
                                    {item}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="github">
                        <h2>Github</h2>
                        <hr />
                        <p><a href={githubLink} target="_blank">{githubLink}</a></p>
                    </div>
                    <div className="live-demo">
                        <h2>Demo</h2>
                        <hr />
                        <p><a href={liveLink} target="_blank" className={isdeadLink ? 'deadLink' : 'liveLink'}>{liveLink}</a></p>
                    </div>
                </div>
                <div className="description">
                    <h1>Description</h1>
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

const ForwardedPortfolioItemLarge = React.forwardRef(PortfolioItemLarge);

export default ForwardedPortfolioItemLarge;