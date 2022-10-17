/**
 * A function for conditionally joining classNames together.
 * If the value associated with a given key is falsy,
 * that key won't be included in the output.
 *
 * @param classObject - object with key as classname and value boolean
 * @returns classnames
 */
export const extendClassname = (classObject: Record<string, boolean>) => {
    let classes = '';
    for (const classname in classObject) {
        if (classObject[classname]) {
            classes += classname + ' ';
        }
    }
    return classes.trim();
};
