import React from 'react';

export const FormErrors = ( { messages } ) => {

console.log("IN FORMERRORS    messages = ", messages  );

return (
<>
     { messages.map( ( message ) => (
        <div> { message.messageText } </div>
        ) ) }




</>

)

/*
    return (
        <div className = 'formErrors' >

            { Object.keys( formErrors ).map( ( fieldName, i ) => {

                if( formErrors[ fieldName ].length > 0 ) {

                    return (

                        <p key = { i } > { fieldName } { formErrors[ fieldName ] } </p>

                    )

                } else {
                    return '';
                  }
                }
            )
            }
        </div>
    )
*/
}

export default FormErrors