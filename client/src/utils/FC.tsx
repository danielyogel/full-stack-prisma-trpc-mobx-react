import React from 'react';

export interface FC<P = {}> {
  (props: P): React.ReactElement<any, any> | null;
}
