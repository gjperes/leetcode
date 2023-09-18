class ValidParentheses {
    public boolean isValid(String s) {
        final Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                Character valid = '\0';

                switch (c) {
                    case ')':
                        valid = '(';
                        break;
                    case '}':
                        valid = '{';
                        break;
                    case ']':
                        valid = '[';
                        break;
                }

                if (stack.isEmpty() || stack.pop() != valid) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}