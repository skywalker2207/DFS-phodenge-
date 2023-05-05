import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTestsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";

const Tests = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTestsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [
    {
      field: "_id",
      headerName: " Test ID",
      flex: 1,
    },
    
    {
      field: "userId",
      headerName: "Patient Id",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Patient Name",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "RBC",
      flex: 1,
    },
    {
      field: "rbc",
      headerName: "WBC",
      flex: 1,
    },
    {
      field: "hemoglobin",
      headerName: "Hemoglobin",
      flex: 1,
    },
    {
      field: "platelets",
      headerName: "platlets",
      flex: 1,
    },
        {
      field: "height",
      headerName: "Height",
      flex: 1,
    },
        {
      field: "weight",
      headerName: "Weight",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Sample time",
      flex: 1,
      flex: 1,
    },
    {
      field: "age",
      headerName: "age",
      flex: 0.5,
      sortable: false,
      
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      
    },

 
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Tests" subtitle="Entire list of clinical tests" />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.tests) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Tests;
