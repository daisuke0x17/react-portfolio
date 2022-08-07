import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam, saepe porro est consequuntur maiores. In suscipit eos molestiae obcaecati consectetur delectus eveniet ut perferendis fugiat iusto autem, voluptatibus blanditiis modi ab voluptates aut neque dolore, esse maiores, provident explicabo minus impedit? Eius ut necessitatibus culpa hic aspernatur mollitia officia?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur culpa deserunt cumque porro distinctio, aliquid nulla ullam est illum ipsam, veniam fuga ea numquam corrupti nihil, labore eveniet inventore. Assumenda necessitatibus tempore consectetur itaque, voluptates exercitationem ullam laborum odio sed rerum ipsum, ducimus sunt incidunt illum saepe, impedit architecto.
            </p>
        </div>
    </div>
  )
}

export default About
