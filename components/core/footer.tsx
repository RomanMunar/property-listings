import { LogoFull } from "../common"

const footer = () => (
  <footer className="font-serif text-gray-100 bg-gray-900 border-t-4 border-gray-700 md:text-lg">
    <div>
      <div className="grid max-w-6xl px-4 py-10 mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 md:place-items-center">
        <div className="flex flex-col mx-auto mb-1 text-center md:mx-0 md:mb-4 md:text-left">
          <LogoFull size="md"/>
          <span>Crafted By Roman Munar</span>
          <span>roman.munar1@gmail.com</span>
          <span>&#169; Year 2021</span>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="mb-1 text-xl text-gray-500 md:mb-4 md:text-2xl">Contact Us</h4>
          <span>1255 Coast Village Road, Suite 102 B</span>
          <span>Santa Barbara, CA, 93108</span>
          <span>Johnhitchkins@gmail.com</span>
          <span>(805) 565-4000</span>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="mb-1 text-xl text-gray-500 md:mb-4 md:text-2xl">Search Properties</h4>
          <span>Home for sale in Mexico</span>
          <span>Home for sale in Philippines</span>
          <span>Home for sale in Santa Barbara</span>
          <span>Home for sale in Makati</span>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="mb-1 text-xl text-gray-500 md:mb-4 md:text-2xl">Hitchkins Partners</h4>
          <span>Michael Hamilton</span>
          <span>Nancy Calcagno</span>
          <span>Erick Kevin Lee</span>
          <span>Roman Emmanuel Munar</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between w-full py-3 bg-gray-800 md:px-20 md:flex-row">
      <div className="text-sm font-bold text-white" id="copyright">
        Copyright © 2021 Roman Munar.
      </div>
      <div className="flex items-center justify-between">
        <span className="mr-4 text-sm text-white">You can find us at</span>
        <div id="socialLinks" className="flex items-center justify-between p-1 space-x-2 bg-white rounded-sm">
          <button className="inline-flex">
            <svg className="w-4 h-4" viewBox="0 0 408.788 408.788">
              <path
                fill="#1DA1F2"
                d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"
              ></path>
              <g></g>
            </svg>
          </button>
          <button className="inline-flex">
            <svg className="w-4 h-4" viewBox="0 0 512 512">
              <path
                fill="#03A9F4"
                d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z"
              ></path>
              <g></g>
            </svg>
          </button>
          <button className="inline-flex">
            <svg className="w-4 h-4" viewBox="0 0 512 512">
              <path
                fill="#FBBB00"
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"
              ></path>
              <path
                fill="#518EF8"
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
              ></path>
              <path
                fill="#28B446"
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
              ></path>
              <path
                fill="#F14336"
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"
              ></path>
              <g></g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
)

export default footer
