import { Query } from "../";

// Query: select tags.id, tags.name from blogtags join tags on tags.id = blogtags.tagid where blogid = blog_id;
const retrieve = (id: number) => Query("CALL spBlogTags(?)", [id])

export default {
    retrieve
}