import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BasicPagination from "../Pagination/Pagination";

const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.33rem;
`;

const TableHeader = styled.th`
  padding: 10px;
  font-family: "Manrope";
  font-weight: 600;
  font-size: 16px;
  line-height: 130.5%;
  color: #886a94;
`;

const TableData = styled.td`
  padding: 10px;
  margin-top: 5px;
  border: solid 1px #fff;
  border-style: none solid solid none;
`;

const TableRow = styled.tr`
  background: #fffeff;
  box-shadow: 0px 12px 36px #efe0f5;
  border-radius: 30px;

  &:last-child ${TableData}:first-child {
    border-bottom-left-radius: 20px;
  }

  &:last-child ${TableData}:last-child {
    border-bottom-right-radius: 20px;
  }

  &:first-child ${TableData}:first-child {
    border-top-left-radius: 20px;
  }

  &:first-child ${TableData}:last-child {
    border-top-right-radius: 20px;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;



const Table = ({ headers, data, totalItems, handlePageChange }) => {
  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <TableData key={cellIndex} index={index}>
                  {cell}
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      <PaginationWrapper>
        <BasicPagination
          totalItems={totalItems}
          onHandlePageChange={handlePageChange}
        />
      </PaginationWrapper>
    </>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
