

// export const formattedName = ( field ) => `${type}.${field}`;

// export const formattedError = ( field ) => 
//     Boolean(
//         getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))
//     );

export const fieldForm = ( type, touched, errors ) => {

    const formattedName = ( field ) => `${type}.${field}`;

    const formattedError = ( field ) => 
        Boolean(
            getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))
        );
  return (
    formattedName(),
    formattedError()
  )
}

// module.exports = {
//    formattedName,
//    formattedError
// };