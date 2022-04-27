const { addFilter } = wp.hooks;

/**
 * When this function gets run by the addfilter
 * hook below, the filter passes it the block settings
 * or config file. 
 */
const filterBlocks = (settings) => {

    if (settings.name !== 'core/button') {
        // we need to pass along the settings object
        // even if we haven't modified them!
        return settings
    }

    // We should only be logging out the paragraph block settings object.
    console.log(settings);

    return settings; 
}

addFilter(
    'blocks.registerBlockType', // hook name, very important!
    'example/filter-blocks', // your name, very arbitrary!
    filterBlocks // function to run
)