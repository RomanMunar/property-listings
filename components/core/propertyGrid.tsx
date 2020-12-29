import React from "react"
import { Property } from "../../@types"

interface Props {
  properties: Property[]
}

const propertyGrid = ({ properties }: Props) => {
  return (
    <div className="flex h-full max-w-6xl mx-auto">
      <div className="flex-grow max-w-xl mx-auto overflow-auto border max-h-90vh">
        <div className="flex flex-col my-2">
          <h3 className="mx-4 font-thin">Search results for "Software & IT Jobs"</h3>
          <div className="relative w-11/12 mx-auto mr-4">
            <input
              type="text"
              className="w-full px-2 py-1 mt-2 border rounded-sm focus:outline-none focus:ring-2 ring-green-700 ring-opacity-40"
            />
            <svg
              className="absolute w-5 h-5 opacity-75 top-4 right-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center self-end mx-4 mt-2 space-x-2">
            <span className="inline-flex px-2 text-xs font-bold bg-gray-200 rounded-full">25 Full time Jobs</span>
          </div>
        </div>
        <div className="flex px-5 py-3 bg-yellow-100 border-t">
          <div className="joblist-card">
            <h3 className="text-lg font-semibold">ReactJS Developers - interview now &amp; start Jan 2021</h3>
            <p className="text-xs text-gray-800">Manila , Philippines</p>
            <span className="text-sm font-semibold tracking-wide text-gray-800 track">4-5 years •</span>
            <span className="p-2 text-sm font-bold text-gray-800"> Full time • </span>
            <span className="px-2 py-1 text-xs bg-gray-200 rounded-full">12/07/2020</span>
            <p className="text-sm text-gray-800">
              Want to start fresh this coming 2021? Apply now and start in January! Enjoy a hassle-free application
              within the comfort of your home Be a part of a w...
            </p>
          </div>
        </div>
        <div className="flex px-5 py-3 border-t">
          <div className="joblist-card">
            <h3 className="text-lg font-semibold">Web Developer and Designer (WordPress)</h3>
            <p className="text-xs text-gray-800">Philippines , Philippines</p>
            <span className="text-sm font-semibold tracking-wide text-gray-800 track">1-3 years •</span>
            <span className="p-2 text-sm font-bold text-gray-800"> Full time • </span>
            <span className="px-2 py-1 text-xs bg-gray-200 rounded-full">12/14/2020</span>
            <p className="text-sm text-gray-800">
              Want to start fresh this coming 2021? Apply now and start in January! Enjoy a hassle-free application
              within the comfort of your home Be part of the p...
            </p>
          </div>
        </div>
        <div className="flex px-5 py-3 bg-white border-t">
          <div className="joblist-card">
            <h3 className="text-lg font-semibold">WordPress Developer</h3>
            <p className="text-xs text-gray-800">Philippines , Philippines</p>
            <span className="text-sm font-semibold tracking-wide text-gray-800 track">1-3 years •</span>
            <span className="p-2 text-sm font-bold text-gray-800"> Full time • </span>
            <span className="px-2 py-1 text-xs bg-gray-200 rounded-full">12/14/2020</span>
            <p className="text-sm text-gray-800">
              Want to start fresh this coming 2021? Apply now and start in January! Enjoy a hassle-free application
              within the comfort of your home Be part of the p...
            </p>
          </div>
        </div>
      </div>
      <div className="hidden w-full p-5 overflow-auto border sm:block max-h-90vh">
        <div className="p-2">
          <div className="px-4">
            <h3 className="mb-4 text-2xl font-bold">ReactJS Developers - interview now & start Jan 2021</h3>
            <div className="p-4 space-y-5 border rounded-lg">
              <h3 className="text-xl font-bold">Job Description</h3>
              <ul className="text-sm">
                <li>
                  <span className="colour">
                    <span className="size">
                      <span className="font">• Want to start fresh this coming 2021? </span>
                    </span>
                  </span>
                  <span className="colour">
                    <span className="size">
                      <span className="font">Apply now and start in January!</span>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="size">
                    <span className="font">• Enjoy a hassle-free application within the comfort of your home</span>
                    <span className="font">
                      <br />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="colour">
                    <span className="colour">
                      <span className="size">
                        <span className="font">
                          •Be a part of a well-regarded Australian digital agency who are Shopify
                          Experts&nbsp;specialising in complex enterprise solutions built upon&nbsp;Shopify Plus
                          predominately for lifestyle brands.
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <span className="size">
                <span className="px-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">Day Shift Only</span>
              </span>
              <div className="text-sm text-gray-900">
                <span className="colour">
                  <span className="highlight">
                    <span className="colour">
                      <span className="highlight">
                        <span className="colour">
                          <span className="size">
                            <span className="font">
                              Working with Australian based Senior Developers, this position’s main overall objective is
                              to be responsible for front-end development and maintenance across the client
                              base.&nbsp;This business has a flat structure where egos are kept out of the studio, they
                              believe every developer needs to take complete ownership of projects including accurately
                              estimating project timelines and are committed to deadlines and delivering to
                              specification.
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <div className="mt-5 text-sm text-gray-900">
                  <span className="colour">
                    <span className="highlight">
                      <span className="colour">
                        <span className="font">
                          <span className="size">
                            They're growing rapidly (still) with a huge influx of new website projects, they need
                            amazing development skills to make these projects come to life and are looking to hire six
                            passionate developers.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div className="p-4 border rounded-lg">
              <div className="space-y-5">
                <ul>
                  <h3 className="text-lg">Requirements</h3>
                  <li>
                    <span className="highlight">
                      <span className="colour">
                        <span className="colour">
                          <span className="font">
                            <span className="text-sm text-gray-900">• Experience in ReactJS Development</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <br />
                  </li>

                  <li>
                    <span className="highlight">
                      <span className="colour">
                        <span className="colour">
                          <span className="font">
                            <span className="text-sm text-gray-900">• Knowledge in Full Stack Development</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <br />
                  </li>

                  <li>
                    <span className="highlight">
                      <span className="colour">
                        <span className="colour">
                          <span className="font">
                            <span className="text-sm text-gray-900">• Extensive experience in HTML and CSS</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <span className="colour">
                        <span className="colour">
                          <span className="font">
                            <span className="text-sm text-gray-900">• AN Opinionated and specific way to code</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
                <div>
                  <div>
                    <span className="font">
                      <span className="text-lg">Desirable</span>
                    </span>
                    <br />
                  </div>
                  <ul>
                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• Experience in any eCommerce platform</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div>
                    <span className="highlight">
                      <span className="colour">
                        <span className="highlight">
                          <span className="colour">
                            <span className="font">
                              <span className="text-lg text-gray-900">Traits we're looking for in you:</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <ul>
                    <li>
                      <span className="highlight">
                        <span className="colour">
                          <span className="highlight">
                            <span className="colour">
                              <span className="font">
                                <span className="text-sm text-gray-900">
                                  • A quick learner&nbsp;- in a face-paced area of JavaScript&nbsp;frameworks, your
                                  ability to take on the latest changes and understanding is key
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <br />
                    </li>

                    <li>
                      <span className="highlight">
                        <span className="colour">
                          <span className="highlight">
                            <span className="colour">
                              <span className="font">
                                <span className="text-sm text-gray-900">
                                  • Takes ownership and responsibility for complete work
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <br />
                    </li>

                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• Exceptional attention to detail</span>
                      </span>
                      <br />
                    </li>
                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• A problem solver</span>
                      </span>
                      <br />
                    </li>
                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• Strong lateral thinker</span>
                      </span>
                      <br />
                    </li>
                    <li>
                      <span className="highlight">
                        <span className="font">
                          <span className="text-sm text-gray-900">
                            • Ability to communicate ideas to the team and know the steps to achieve them
                          </span>
                        </span>
                      </span>
                      <br />
                    </li>

                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• Understanding of "why" not just "what" you do</span>
                      </span>
                      <br />
                    </li>
                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• Has the "I can't let this fail" attitude</span>
                      </span>
                      <br />
                    </li>
                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">• Ability to work in a fast-paced environment</span>
                      </span>
                      <br />
                    </li>
                    <li>
                      <span className="font">
                        <span className="text-sm text-gray-900">
                          • Real team player - looking out for others and achieving together
                        </span>
                      </span>
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg text-gray-900">Benefits</h3>
              <div>
                <span className="highlight">
                  <span className="colour">
                    <span className="colour">
                      <span className="highlight">
                        <span className="colour">
                          <span className="size">
                            <span className="text-sm text-gray-900">
                              • On top of being a really cool company and a great place to work, you’ll get the
                              following benefits as part of the Filta Family
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li>
                  <span className="highlight">
                    <span className="colour">
                      <span className="colour">
                        <span className="size">
                          <span className="text-sm text-gray-900">• 6:00am to 3:00pm Monday to Friday shift</span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <br />
                </li>

                <li>
                  <span className="highlight">
                    <span className="colour">
                      <span className="colour">
                        <span className="size">
                          <span className="text-sm text-gray-900">
                            • HMO for yourself and one dependent within the first month
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="size">
                    <span className="font">
                      <br />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="highlight">
                    <span className="colour">
                      <span className="colour">
                        <span className="size">
                          <span className="text-sm text-gray-900">
                            • 20 combined SL/VLs per year accrued from day one (you will have 10 accrued once you pass
                            regularisation)
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="size">
                    <span className="font">
                      <br />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="highlight">
                    <span className="colour">
                      <span className="colour">
                        <span className="size">
                          <span className="text-sm text-gray-900">
                            • 30 minutes early out Fridays (after regularisation, upon completing all your tasks for the
                            week, and if you’re on time during the week)
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <br />
                </li>

                <li>
                  <span className="highlight">
                    <span className="colour">
                      <span className="colour">
                        <span className="colour">
                          <span className="size">
                            <span className="text-sm text-gray-900">
                              • Company perks relating to your role such as free tickets to meetups, conventions,
                              conferences, etc.
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="size">
                    <span className="font">
                      <br />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="highlight">
                    <span className="colour">
                      <span className="colour">
                        <span className="size">
                          <span className="text-sm text-gray-900">• The opportunity to be a part of&nbsp;</span>
                        </span>
                        <span className="colour">
                          <span className="size">
                            <span className="font">Shopify Meetup Manila</span>
                          </span>
                        </span>
                        <span className="size">
                          <span className="font">
                            &nbsp;run by Filta every quarter.&nbsp; This event will expose you to the Shopify – the
                            world's fastest growing eCommerce platform – and the ecosystem in Manila.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="size">
                    <span className="font">
                      <br />
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default propertyGrid
