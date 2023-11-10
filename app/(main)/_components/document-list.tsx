"use client"

import { useState } from "react";

import { Doc, Id } from "@/convex/_generated/dataModel"
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Item from "./item";

interface DocumentListProps {
  parentdocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

const DocumentList = ({
  parentdocumentId,
  level = 0
}: DocumentListProps) => {
  const params = useParams()
  const router = useRouter()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const onExpand = (documentId: string) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId]
    }))
  }

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentdocumentId
  })

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`)
  }

  if(documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    )
  }
  
  return ( 
    <div>
      Document List
    </div>
  );
}
 
export default DocumentList;
