<template>
  <div class="w-full">
    <div
      v-if="isOpen"
      class="
        absolute
        top-20
        bottom-32
        right-0
        left-0
        bg-gray-500
        overflow-scroll
      "
    >
      <div
        class="
          container
          mx-auto
          flex
          justify-center
          align-middle
          items-center
          flex-col
          overflow-scroll
        "
      >
        <!-- buttons -->
        <button
          v-for="(link, index) in quickLinks"
          @click="$emit('quickLinkClicked', link.pageNumber)"
          :key="index"
          class="
            p-2
            text-xl text-gray-300
            hover:bg-gray-50 hover:text-gray-900
            w-full
            md:w-1/2
            lg:w-1/4
            rounded-sm
          "
        >
          {{ link.text }}
        </button>
      </div>
    </div>
    <button
      class="
        w-full
        bg-gray-800
        text-center
        py-5
        text-gray-100
        transition
        hover:shadow-md hover:bg-gray-900
      "
      @click="$emit('toggleQuickLinks')"
    >
      Quick Links
    </button>
  </div>
</template>

<script>
export default {
  name: "ManualViewerQuickLinks",
  data() {
    return {
      quickLinks: [
        {
          text: "Front Page",
          pageNumber: 1,
        },
        {
          text: "Contents",
          pageNumber: 9,
        },
        {
          text: "Dear VW Owner",
          pageNumber: 17,
        },
        {
          text: "Vehicle Identification",
          pageNumber: 19,
        },
        {
          text: "Key / Doors",
          pageNumber: 20,
        },
        {
          text: "Sliding Door",
          pageNumber: 21,
        },
        {
          text: "Rear Lid / Windows",
          pageNumber: 22,
        },
        {
          text: "Seats",
          pageNumber: 23,
        },
        {
          text: "Safety Belts",
          pageNumber: 25,
        },
        {
          text: "Instrument Panel",
          pageNumber: 26,
        },
        {
          text: "Sun visors / Coat hooks / Assist handles / Front interior light",
          pageNumber: 31,
        },
        {
          text: "Controls for Manual Transmission",
          pageNumber: 32,
        },
        {
          text: "Controls for Automatic Transmission",
          pageNumber: 34,
        },
        {
          text: "Starting Hints",
          pageNumber: 37,
        },
        {
          text: "Ashtrays, Sliding Roof, Heater / Defroster",
          pageNumber: 38,
        },
        {
          text: "Ventilation",
          pageNumber: 40,
        },
        {
          text: "VW Air Conditioner (optional equipment)",
          pageNumber: 41,
        },
        {
          text: "VW Auxiliary Heater (optional equipment)",
          pageNumber: 43,
        },
        {
          text: "Towing and Trailer Hauling",
          pageNumber: 44,
        },
        {
          text: "Winter Operations",
          pageNumber: 45,
        },
        {
          text: "Tires",
          pageNumber: 46,
        },
        {
          text: "Spare Wheel",
          pageNumber: 48,
        },
        {
          text: "Changing a Wheel",
          pageNumber: 49,
        },
        {
          text: "Container for windshield washer fluid / Brake fluid reservoir",
          pageNumber: 52,
        },
        {
          text: "Fuses",
          pageNumber: 53,
        },
        {
          text: "Battery",
          pageNumber: 54,
        },
        {
          text: "Fuel Supply",
          pageNumber: 55,
        },
        {
          text: "Cleaning your VW",
          pageNumber: 56,
        },
        {
          text: "Bulb Chart / Replacing Bulbs",
          pageNumber: 58,
        },
        {
          text: "Engine Compartment / Spark Plugs",
          pageNumber: 61,
        },
        {
          text: "Checking the Oil Level",
          pageNumber: 62,
        },
        {
          text: "Changing the Engine Oil",
          pageNumber: 63,
        },
        {
          text: "Manual Transmission Oil / Automatic Transmission Fluid",
          pageNumber: 64,
        },
        {
          text: "Air Cleaner",
          pageNumber: 65,
        },
        {
          text: "Lubrication",
          pageNumber: 66,
        },
        {
          text: "Engine Oil",
          pageNumber: 67,
        },
        {
          text: "Transmission Oil and Automatic Transmission Fluid (ATF)",
          pageNumber: 68,
        },
        {
          text: "Troubleshooting",
          pageNumber: 69,
        },
        {
          text: "Owner Relations",
          pageNumber: 71,
        },
        {
          text: "Addresses of VW Distributors in the US",
          pageNumber: 72,
        },
        {
          text: "Technical Data",
          pageNumber: 73,
        },
        {
          text: "Oil Change and Maintenance Service 600 Miles",
          pageNumber: 79,
        },
        {
          text: "VW Diagnosis and Maintenance",
          pageNumber: 80,
        },
        {
          text: "Dealer Stamps",
          pageNumber: 83,
        },
        {
          text: "Additional Service Record",
          pageNumber: 87,
        },
        {
          text: "New Vehicle Delivery Inspection",
          pageNumber: 89,
        },
        {
          text: "Back Page",
          pageNumber: 94,
        },
      ],
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

<style>
</style>