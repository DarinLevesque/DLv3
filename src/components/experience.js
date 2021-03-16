import React from 'react';

const Experience = ({ data }) => (
  <>
  {/* <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className="py-6">{item.description}</p>
        </article>
      ))}
  </section> */}
  <section class="text-gray-600 body-font overflow-hidden">
  <h1 className="section-header">Experience</h1>
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
    {data &&
      data.map((item, i) => (
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700" key={`${item.company}-${i}`}>{item.company}</span>
          <span class="mt-1 text-gray-500 text-sm">{item.start} - {item.end || 'PRESENT'}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{item.role}</h2>
          <p class="leading-relaxed">{item.description}</p>
          <a href="#" class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
</>
);

export default Experience;
