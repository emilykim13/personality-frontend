export const handleSignValidation = (e, vData) => {
    const {name, value} = e.target
    const validationData = vData
    const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    switch(name) {
        case "NAME":
            validationData.errors.name = value.length < 1 ? "Name form must be filled in." : ""
            validationData.name = value
            break
        case "EMAIL":
            validationData.errors.email = emailRegex.test(value) ? '' : 'Email is not valid!'
            validationData.email = value
            break
        case "PASSWORD":
            validationData.errors.password = value.length < 1 ? "Password form needs to be filled in." : ""
            validationData.password = value
            break
        default:
            break
    }
    return {type: "VALIDATED_SIGN_UP"}
}