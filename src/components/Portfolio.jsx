import React, {useEffect, useRef, useState} from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import PortfolioItemLarge from './PortfolioItemLarge';
import ForwardedPortfolioItemLarge from './PortfolioItemLarge';

function Portfolio(){
    const modalRef = useRef(null);
    const [displayLarge, setDisplayLarge] = useState(false);
    const [largeTitle, setLargeTitle] = useState('');
    const [largeStack, setLargeStack] = useState(null);
    const [largeDescription, setLargeDescription] = useState('');
    const [largeLiveLink, setLargeLiveLink] = useState('');
    const [largeGithubLink, setLargeGithubLink] = useState('');
    const [largeImgUrl, setLargeImageUrl] = useState('');

    const handleBlur = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setDisplayLarge(false);
        }
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleBlur);

        return () => {
            document.removeEventListener("mousedown", handleBlur);
        };
    }, []);
    

    function Callback(childData){
        console.log(childData);
        setDisplayLarge(childData.display);
        setLargeTitle(childData.title)
        setLargeStack(childData.stack);
        setLargeDescription(childData.description);
        setLargeLiveLink(childData.liveLink);
        setLargeGithubLink(childData.githubLink);
        setLargeImageUrl(childData.imgUrl);
    }


    return(
        <div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            description={project.description}
                            handleCallBack={Callback}
                        />
                    ))}
                </div>
            </div>
            
            {displayLarge && <ForwardedPortfolioItemLarge ref={modalRef} onBlur={handleBlur}
                    title={largeTitle}
                    imgUrl={largeImgUrl}
                    stack={largeStack}
                    liveLink={largeLiveLink}
                    description={largeDescription}
                    githubLink={largeGithubLink}
                />}
        </div>
        
    )
}


export default Portfolio;