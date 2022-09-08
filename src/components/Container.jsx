import React from 'react';

export default function Container({children}) {
    
    return (
        <main className="container -mt-5 md:-mt-10 h-screen">{children}</main>
    )
}
