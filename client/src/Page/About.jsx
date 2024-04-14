import React from 'react'
import Team from '../Components/Team'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 mt-16'>
            <p className='p-2 font-semibold text-center sm:px-10 md:px-16 lg:px-40'>आम तौर पर हम मान लेते है कि पेड़ पौधे ,पहाड़ ,नदियां आदि प्रकृति है लेकिन यह सच नहीं है | शास्त्रों के अनुसार प्रकृति के आठ अंग है | यह जान कर आपको खुशी होगी और आश्चर्य होगा कि मनुष्य प्रकृति के आठ अंगों मे एक है जिससे मिलकर यह प्रकृति बनती है | सांख्य दर्शन उन 25 तत्वों की बात करता है जो तत्व जड़ चेतन , जीव और जगत के आधार है |
            </p>
            <Team />
        </div>
    )
}

export default About