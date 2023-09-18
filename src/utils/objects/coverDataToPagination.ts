import { Post } from "../slices/postsSlice"

export const convertDataToPagination = (props: Post[]) => {
    const data = {
        posts: props,
        numFound: props.length,
        start: 0
    }

    return data
}