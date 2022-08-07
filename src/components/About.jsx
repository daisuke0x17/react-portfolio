import React from 'react'
import Career from './Career'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-title'>
                    About
                </p>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='mx-auto mb-10 w-full md:mr-20'>
                    <p className='text-xl mt-20'>
                        所属：同志社大学M1(24卒)<br/>
                        研究：クラウドコンピューティング<br/>
                        趣味：バイク、キャンプ、ダイビング、ゲーム<br/>
                    </p>
                    <br />
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur culpa deserunt cumque porro distinctio, aliquid nulla ullam est illum ipsam, veniam fuga ea numquam corrupti nihil, labore eveniet inventore. Assumenda necessitatibus tempore consectetur itaque, voluptates exercitationem ullam laborum odio sed rerum ipsum, ducimus sunt incidunt illum saepe, impedit architecto.
                    </p>
                </div>
                <Career />
            </div>
        </div>
    </div>
  )
}

export default About
