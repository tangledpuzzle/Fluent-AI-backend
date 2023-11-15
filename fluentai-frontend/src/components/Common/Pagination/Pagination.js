import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalItems, onHandlePageChange }) {
  const customPageItemStyle = {
    color: "#000",
  };

  const customSelectedPageItemStyle = {
    width: "20px",
    height: "20px",
    background: "#A558C8",
    borderRadius: "50%",
    color: "#FFF",
  };

  const customNavigationButtonStyle = {
    background: "#FFF",
    color: "#000",
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={
          totalItems % 10 === 0
            ? Math.floor(totalItems / 10)
            : Math.floor(totalItems / 10) + 1
        }
        color="secondary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={
              item.type === "selected"
                ? customSelectedPageItemStyle
                : customPageItemStyle
            }
          />
        )}
        nextButtonProps={{
          sx: customNavigationButtonStyle,
        }}
        previousButtonProps={{
          sx: customNavigationButtonStyle,
        }}
        onChange={onHandlePageChange}
      />
    </Stack>
  );
}
