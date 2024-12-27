const useDetectDevice = () => {
    const userAgent = navigator.userAgent ;

    // Check for mobile devices
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobile = mobileRegex.test(userAgent);

  return isMobile;
};

export default useDetectDevice;
