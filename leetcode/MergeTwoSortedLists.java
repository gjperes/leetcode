class MergeTwoSortedLists {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode start = new ListNode();
        ListNode temp = start;

        while(list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                temp.next = list1;
                list1 = list1.next; // "Remove" esse node que foi inserido
            } else {
                temp.next = list2;
                list2 = list2.next; // "Remove" esse node que foi inserido
            }

            temp = temp.next; // Avança pro último node, p/ apontar pro próx 
        }

        // Se sobrou algo, o último node aponta pro resto da lista
        if (list1 != null) temp.next = list1;
        if (list2 != null) temp.next = list2;

        // Avança pra poder pegar o primeiro node inserido
        return start.next;
    }
}