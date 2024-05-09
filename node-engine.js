function Node(id, nodeName, lastEditedDate, revision, approveStatus) {
    this.id = id;
    this.nodeName = nodeName;
    this.lastEditedDate = lastEditedDate;
    this.revision = revision;
    this.approveStatus = approveStatus;
  }
  
  var node1 = new Node("id-123", "butter", "2024-05-08", 5, "Approved");

  