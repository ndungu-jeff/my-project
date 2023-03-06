import React from "react";
import { Label } from "flowbite-react";

function Comment() {
  return (
    <>
      <div id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
        />
      </div>
    </>
  );
}

export default Comment;
