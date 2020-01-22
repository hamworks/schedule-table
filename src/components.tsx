import * as React from 'react';

export const TableCell: React.FC<{head?: boolean} & React.HTMLAttributes<HTMLElement>> = ( { head, children, ...props } ) => {
	if ( head ) {
		return <th { ...props }>{ children }</th>;
	}
	return <td { ...props }>{ children }</td>;
};
