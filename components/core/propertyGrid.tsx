import { disableBodyScroll } from "../../lib/utils/disableScroll"
import { enableBodyScroll } from "../../lib/utils/enableScroll"
import { useState, useEffect } from "react"
import { PropertyCard } from "."
import { Property } from "../../@types"

interface Props {
  properties: Property[]
}

const propertyGrid = ({ properties }: Props) => {
  const [selected, setSelected] = useState<Property>()
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const onPropertyClick = (property: Property) => {
    setSelected(property)
    disableBodyScroll()
  }
  useEffect(() => setSelected(properties[0]), [properties])

  return (
    <>
      <div className="flex h-full py-20 bg-gray-800">
        <div className="flex w-full max-w-6xl mx-auto">
          <div className="max-w-lg mx-auto overflow-auto border border-r-0 max-h-90vh">
            <div className="flex flex-col my-2">
              <h3 className="mx-4 font-thin text-white">Search results for "Software & IT Jobs"</h3>
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
                <span className="inline-flex px-2 text-xs font-bold bg-gray-700 rounded-full text-amber-500">
                  25 Listed Properties
                </span>
              </div>
            </div>
            <div>
              {properties.map((p) => (
                <PropertyCard onPropertyClick={onPropertyClick} selected={selected?.id === p.id} property={p} />
              ))}
            </div>
          </div>
          <div className="hidden w-full p-5 overflow-auto text-white bg-gray-800 border border-amber-500 sm:block max-h-90vh">
            {selected && (
              <div className="px-4 py-2">
                <h3 className="mb-4 text-2xl font-bold text-amber-500">{selected.title}</h3>
                <div className="p-4 space-y-5 border rounded-lg">
                  <h3 className="text-xl font-bold">Property Description</h3>
                  <p className="text-sm">{selected.description} </p>
                  <span className="size">
                    <span className="px-2 text-sm font-medium text-gray-100 bg-gray-200 rounded-full">
                      Day Shift Only
                    </span>
                  </span>
                </div>
                <br />
                <div className="p-4 border rounded-lg">
                  <div className="space-y-5">
                    <h3 className="text-lg">Requirements</h3>
                    <ul>
                      <li>
                        <span className="text-sm ">• Experience in ReactJS Development</span>
                      </li>

                      <li>
                        <span className="text-sm ">• Knowledge in Full Stack Development</span>
                      </li>

                      <li>
                        <span className="text-sm ">• Extensive experience in HTML and CSS</span>
                      </li>
                      <li>
                        <span className="text-sm ">• AN Opinionated and specific way to code</span>
                      </li>
                    </ul>
                    <div>
                      <div>
                        <span className="font">
                          <span className="text-lg">Desirable</span>
                        </span>
                      </div>
                      <ul>
                        <li>
                          <span className="font">
                            <span className="text-sm ">• Experience in any eCommerce platform</span>
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
                                  <span className="text-lg ">Traits we're looking for in you:</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                      <ul>
                        <li>
                          <span className="font">
                            <span className="text-sm ">
                              • A quick learner&nbsp;- in a face-paced area of JavaScript&nbsp;frameworks, your ability
                              to take on the latest changes and understanding is key
                            </span>
                          </span>
                        </li>

                        <li>
                          <span className="font">
                            <span className="text-sm ">• Takes ownership and responsibility for complete work</span>
                          </span>
                        </li>

                        <li>
                          <span className="font">
                            <span className="text-sm ">• Exceptional attention to detail</span>
                          </span>
                        </li>
                        <li>
                          <span className="font">
                            <span className="text-sm ">• A problem solver</span>
                          </span>
                        </li>
                        <li>
                          <span className="font">
                            <span className="text-sm ">• Strong lateral thinker</span>
                          </span>
                        </li>
                        <li>
                          <span className="highlight">
                            <span className="font">
                              <span className="text-sm ">
                                • Ability to communicate ideas to the team and know the steps to achieve them
                              </span>
                            </span>
                          </span>
                        </li>

                        <li>
                          <span className="font">
                            <span className="text-sm ">• Understanding of "why" not just "what" you do</span>
                          </span>
                        </li>
                        <li>
                          <span className="font">
                            <span className="text-sm ">• Has the "I can't let this fail" attitude</span>
                          </span>
                        </li>
                        <li>
                          <span className="font">
                            <span className="text-sm ">• Ability to work in a fast-paced environment</span>
                          </span>
                        </li>
                        <li>
                          <span className="font">
                            <span className="text-sm ">
                              • Real team player - looking out for others and achieving together
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg ">Benefits</h3>
                  <div>
                    <span className="highlight">
                      <span className="colour">
                        <span className="colour">
                          <span className="highlight">
                            <span className="colour">
                              <span className="size">
                                <span className="text-sm ">
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
                              <span className="text-sm ">• 6:00am to 3:00pm Monday to Friday shift</span>
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
                              <span className="text-sm ">
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
                      <span className="text-sm ">
                        • 20 combined SL/VLs per year accrued from day one (you will have 10 accrued once you pass
                        regularisation)
                      </span>
                    </li>
                    <li>
                      <span className="text-sm ">
                        • 30 minutes early out Fridays (after regularisation, upon completing all your tasks for the
                        week, and if you’re on time during the week)
                      </span>
                    </li>

                    <li>
                      <span className="text-sm ">
                        • Company perks relating to your role such as free tickets to meetups, conventions, conferences,
                        etc.
                      </span>
                    </li>
                    <li>
                      <span className="size">
                        <span className="text-sm ">• The opportunity to be a part of&nbsp;</span>
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
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {selected && (
        <>
          <button
            onClick={() => {
              setIsOverlayOpen(false)
              enableBodyScroll()
            }}
            className="fixed inset-0 z-40 w-full h-full bg-gray-500 bg-opacity-30 sm:block"
          />
          <nav className="fixed bottom-0 z-50 w-full h-1/2">
            <ul className="flex flex-col items-center justify-around w-full h-full py-10 space-y-4 text-white bg-gray-700 rounded-tl-2xl rounded-tr-2xl top-1/2">
              <li className="px-4 py-1 font-bold border-b-2 border-amber-500">Home</li>
              <li>Listings</li>
              <li className="px-4 py-1">Testimonials</li>
              <li className="px-4 py-1">Contact</li>
            </ul>
          </nav>
        </>
      )}
    </>
  )
}

export default propertyGrid
