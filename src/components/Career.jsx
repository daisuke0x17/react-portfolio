import React from 'react';

const Career = () => {
    return (
        <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center h-full w-full'>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-6">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Life is Tech!
                        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            Latest
                        </span>
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022年4月〜</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        internship<br />
                        Webサービスコースメンター<br/>
                        Rubyを用いたWebサービス構築をサポート
                    </p>
                </li>
                <li class="mb-10 ml-6">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="mb-1 text-lg text-gray-900 dark:text-white">Salesforce Japan</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022年7月〜2022年8月</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        summer internship
                    </p>
                </li>
                <li class="mb-10 ml-6">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="mb-1 text-lg text-gray-900 dark:text-white">GUNZE SPORTS</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018年〜2022年</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        part-time job<br/>
                        スイミングスクールコーチ<br/>
                        成人と子供の有料パーソナルレッスンを担当
                    </p>
                </li>
                <li class="mb-10 ml-6">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="mb-1 text-lg text-gray-900 dark:text-white">枚方スイミングスクール</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019年〜2022年</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        part-time job<br/>
                        選手コースのアシスタントコーチ<br/>
                        全国大会(JOC)に出場する選手を担当
                    </p>
                </li>
            </ol>
        </div>
      )
}

export default Career
