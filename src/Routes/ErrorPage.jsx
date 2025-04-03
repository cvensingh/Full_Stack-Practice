import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();  // Fix typo here
    
    console.log(error);

    return (
        <div id="ErrorPage">
            <h1>Oops!</h1>
            <p>Sorry! An unexpected error occurred.</p>

            <p>
                <i>{error?.statusText || error?.message || "Unknown error"}</i>  {/* Handle undefined error properties */}
            </p>
        </div>
    );
}
