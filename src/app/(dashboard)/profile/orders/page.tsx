import OrdersList, { OrdersListProps } from "@/components/OrdersList"
import Profile from "@/templates/Profile"
import ordersMock from "@/components/OrdersList/mock"

export default async function Orders() {
  const { props }: { props: OrdersListProps } = await getProps()

  return (
    <Profile>
      <OrdersList items={props.items} />
    </Profile>
  )
}

export async function getProps() {
  return {
    props: {
      items: ordersMock,
    },
  }
}
