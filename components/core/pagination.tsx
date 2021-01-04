import React from "react"

interface Props {
  handlePagination: (action: "increment" | "decrement" | "to", toPage?: number) => void
  propertiesLength: number
}

const pagination = ({ handlePagination, propertiesLength }: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-900 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <button
          onClick={() => handlePagination("decrement")}
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-300 rounded-md hover:text-gray-500"
        >
          Previous
        </button>
        <button
          onClick={() => handlePagination("increment")}
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-300 border border-gray-300 rounded-md hover:text-gray-500"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="mx-auto">
          <nav className="relative z-0 inline-flex mx-auto -space-x-px bg-gray-900" aria-label="Pagination">
            <button
              onClick={() => handlePagination("decrement")}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-200 border border-gray-300 rounded-l-md hover:bg-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {Array(Number((propertiesLength / 7).toFixed()))
              .fill(0)
              .map((_, idx) => (
                <button
                  key={`${idx + 1}-pageNumber`}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 border border-gray-300 hover:bg-gray-700"
                  onClick={() => handlePagination("to", idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            <button
              onClick={() => handlePagination("increment")}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-200 border border-gray-300 rounded-r-md hover:bg-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default pagination
