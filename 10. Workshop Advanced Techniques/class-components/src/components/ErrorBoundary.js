import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError');
        console.log('error: ' + error)
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}