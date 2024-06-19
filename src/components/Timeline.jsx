import React from 'react'

export const Timeline = () => {
    const historyEvents = [
        {
          id: 1,
          year: '2010',
          name: '智特成立',
          description: '智特成立讲一个故事，张总创业',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
        },
        {
          id: 2,
          year: '2011',
          name: '第一个试管婴儿胚胎成型',
          description: '再讲一个打动人的故事 体现专业度',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
        },
        {
          id: 3,
          year: '2012',
          name: '张欣博士入选千人计划',
          description: '吹吹张总有多牛逼',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
        },
        {
          id: 4,
          year: '2013',
          name: '第一个智特宝宝通过辅助生殖技术降生',
          description: '再讲一个动人的故事',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
        },
        {
          id: 5,
          year: '2014',
          name: '智特医疗全国范围扩张',
          description: '全国各地哪年成立了哪些办公室',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
        },
        {
          id: 6,
          year: '2015',
          name: '第100个宝宝诞生',
          description: '继续讲故事',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
        },
        {
          id: 7,
          year: '2016',
          name: '携程战略投资',
          description: '仔细说说，引用携程梁建章采访',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
        },
        {
          id: 8,
          year: '2022',
          name: '全球拓展',
          description: '日本墨西哥生殖中心',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
        },
      ];

  return (
    <div className='md:p-16 p-4 bg-diyBrown'>
        <h1 className='text-4xl font-bold md:ml-14 mb-16'>智特历史</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">          
            {historyEvents.map((item, index) => (
            <li key={index} className=''>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={`${index % 2 === 0 ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"} `}> {/* I want the className alternate between "timeline-start md:text-end mb-10" and "timeline-end mb-10" */}
                    <time className="font-mono italic">{item.year}</time>
                    <div className="text-lg font-black">{item.name}</div>
                    {item.description}
                </div>
                <hr/>
            </li>
            ))}
            <div className='timeline-middle text-center m-4 text-lg font-black'>未完待续...</div>
            
        </ul>
    </div>
  )
}

export default Timeline