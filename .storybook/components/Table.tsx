import React from 'react'

interface CustomTableProps {
  children: React.ReactNode
}

/**
 * Custom Table Component to replace the default table component.
 * @param children - The content of the table.
 * @returns JSX.Element
 */
const CustomTable: React.FC<CustomTableProps> = ({ children }) => {
  return (
    <table className="table">
      {children}
    </table>
  )
}

export default CustomTable
