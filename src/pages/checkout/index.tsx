import { MapPin } from "@phosphor-icons/react";
import { AddressContainer, AddressForm, AddressHeading, Container, InfoContainer, PaymentContainer, PaymentHeading } from "./styles";
import { TextInput } from "../../components/Header/components/Form/TextInput";
import { useCart } from "../../hooks/useCart";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar } from "phosphor-react";


type FormIpunts = {
    cep:number;
    street:string;
    number:string;
    fullAddress:string;
    neighbourhood:string;
    city:string;
    state:string;
    paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
    cep:z.number({ invalid_type_error:'Informe o CEP'}),
    street:z.string().min(1,'Informe  a rua'),
    number:z.string().min(1,'Informe  o número'),
    fullAddress:z.string().min(1,'Informe  o bairro'),
    city:z.string().min(1,'Informe a cidade'),
    state:z.string().min(1,'Informe a UF'),
    paymentMethod:z.enum(['credit','debit','cash'],{
        invalid_type_error:'Informe o método de pagamento'
    })
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Cart(){

    const {
        cart,
        checkout,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
    } = useCart();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormIpunts>({
        resolver:zodResolver(newOrder)
    });

    const selectedPayment = watch('paymentMethod')

    const handleItemIncrement = (itemId:string) =>{
        incrementItemQuantity(itemId)
    }

    const handleItemDecrement = (itemId:string) =>{
        decrementItemQuantity(itemId)
    }  

    const handleItemRemove = (itemId:string) =>{
        removeItem(itemId)
    }

    const handleOrderCheck:SubmitHandler<FormIpunts> = (data) =>{
        if(cart.length === 0){
            return alert(`É preciso ter pelo menos um item no carrinho.`)
        }
        checkout(data)
    }


    return(
        <Container>
            <InfoContainer>
                <h2>Complete seu pedido</h2>

                <form id='order' onSubmit={handleSubmit(handleOrderCheck)}>
                    <AddressContainer>
                        <AddressHeading>
                            <MapPin size={32}/>
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja reveber o seu pedido</p>
                            </div>
                        </AddressHeading>
                        <AddressForm>
                            <TextInput
                                placeholder='CEP'
                                type='number'
                                containerProps={{style:{gridArea:'cep'}}}
                                error={errors.cep}
                                {...register('cep',{valueAsNumber:true})}
                            />

                            <TextInput
                                placeholder='Rua'
                                containerProps={{style:{gridArea:'street'}}}
                                error={errors.street}
                                {...register('street')}
                            />

                            <TextInput
                                placeholder='Número'
                                containerProps={{style:{gridArea:'number'}}}
                                error={errors.number}
                                {...register('number')}
                            />

                            <TextInput
                                placeholder='Complemento'
                                containerProps={{style:{gridArea:'fullAddress'}}}
                                error={errors.fullAddress}
                                {...register('fullAddress')}
                            />

                            <TextInput
                                placeholder='Bairro'
                                containerProps={{style:{gridArea:'neighbourhood'}}}
                                error={errors.cep}
                                {...register('fullAddress')}
                            />

                            <TextInput
                                placeholder='Cidade'
                                containerProps={{style:{gridArea:'city'}}}
                                error={errors.city}
                                {...register('city')}
                            />

                            <TextInput
                                placeholder='UF'
                                maxLength={2}
                                containerProps={{style:{gridArea:'state'}}}
                                error={errors.state}
                                {...register('state')}
                            />
                        </AddressForm>
                    </AddressContainer>
                    <PaymentContainer>
                        <PaymentHeading>
                            <CurrencyDollar size={22}/>

                            <div>
                                <span>Pagamento</span>
                                <p>
                                    O Pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </p>
                            </div>
                        </PaymentHeading>
                    </PaymentContainer>
                </form>
            </InfoContainer>
        </Container>
    )
}