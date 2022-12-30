import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

export const FaqTable= (props:any) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'type',
                header: 'type',
            },
            {
                accessorKey: 'subject',
                header: 'Subject',
            },
            {
                accessorKey: 'url',
                header: 'url',
            },
        ],
        [],
    );
    return (
        <MaterialReactTable state={props.data} columns={columns}
            data={props.data}
            enableColumnActions={true}
            enableColumnFilters={false}
            enablePagination={true}
            enableSorting={true}
            enableBottomToolbar={true}
            enableTopToolbar={true}
            muiTableBodyRowProps={{ hover: true }}
        />
    );
};

export default FaqTable;